module.exports = async function (context, req) {
  const date = "2023-08-06T21:06:45.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

