module.exports = async function (context, req) {
  const date = "2023-05-28T23:08:34.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

