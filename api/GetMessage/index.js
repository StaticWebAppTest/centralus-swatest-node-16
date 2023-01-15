module.exports = async function (context, req) {
  const date = "2023-01-15T21:07:55.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

