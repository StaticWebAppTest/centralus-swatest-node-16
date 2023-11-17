module.exports = async function (context, req) {
  const date = "2023-11-17T19:07:35.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

