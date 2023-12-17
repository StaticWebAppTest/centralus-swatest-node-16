module.exports = async function (context, req) {
  const date = "2023-12-17T19:06:52.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

