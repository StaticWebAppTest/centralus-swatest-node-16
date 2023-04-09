module.exports = async function (context, req) {
  const date = "2023-04-09T19:06:25.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

