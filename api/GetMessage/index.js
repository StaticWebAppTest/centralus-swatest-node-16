module.exports = async function (context, req) {
  const date = "2024-04-06T05:09:25.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

