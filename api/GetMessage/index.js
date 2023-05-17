module.exports = async function (context, req) {
  const date = "2023-05-17T21:08:56.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

