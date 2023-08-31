module.exports = async function (context, req) {
  const date = "2023-08-31T14:08:47.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

