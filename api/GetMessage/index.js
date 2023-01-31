module.exports = async function (context, req) {
  const date = "2023-01-31T05:08:56.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

