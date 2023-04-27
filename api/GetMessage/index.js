module.exports = async function (context, req) {
  const date = "2023-04-27T19:07:03.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

