module.exports = async function (context, req) {
  const date = "2023-01-01T17:07:39.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

