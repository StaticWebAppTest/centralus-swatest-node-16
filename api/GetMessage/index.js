module.exports = async function (context, req) {
  const date = "2023-06-15T21:08:27.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

