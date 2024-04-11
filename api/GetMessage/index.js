module.exports = async function (context, req) {
  const date = "2024-04-11T04:11:01.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

