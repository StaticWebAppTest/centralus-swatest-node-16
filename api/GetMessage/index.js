module.exports = async function (context, req) {
  const date = "2024-03-11T05:10:13.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

