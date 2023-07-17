module.exports = async function (context, req) {
  const date = "2023-07-17T02:58:48.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

