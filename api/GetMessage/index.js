module.exports = async function (context, req) {
  const date = "2023-12-05T17:08:52.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

