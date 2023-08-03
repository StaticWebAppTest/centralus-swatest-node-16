module.exports = async function (context, req) {
  const date = "2023-08-03T09:08:47.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

