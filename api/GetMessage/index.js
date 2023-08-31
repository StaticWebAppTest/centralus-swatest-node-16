module.exports = async function (context, req) {
  const date = "2023-08-31T00:40:09.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

