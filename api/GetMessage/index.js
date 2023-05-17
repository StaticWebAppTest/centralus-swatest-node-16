module.exports = async function (context, req) {
  const date = "2023-05-17T12:16:31.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

