module.exports = async function (context, req) {
  const date = "2024-11-16T05:11:15.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

