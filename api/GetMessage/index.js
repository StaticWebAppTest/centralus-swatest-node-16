module.exports = async function (context, req) {
  const date = "2023-09-16T05:07:27.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

