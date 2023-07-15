module.exports = async function (context, req) {
  const date = "2023-07-15T15:08:59.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

