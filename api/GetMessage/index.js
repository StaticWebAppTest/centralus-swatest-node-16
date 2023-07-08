module.exports = async function (context, req) {
  const date = "2023-07-08T06:11:56.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

