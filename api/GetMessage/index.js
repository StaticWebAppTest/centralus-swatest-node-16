module.exports = async function (context, req) {
  const date = "2024-04-17T19:06:36.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

