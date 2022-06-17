module.exports = async function (context, req) {
  const date = "2022-06-17T21:08:57.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

