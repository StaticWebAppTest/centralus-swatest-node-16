module.exports = async function (context, req) {
  const date = "2023-04-17T19:06:15.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

