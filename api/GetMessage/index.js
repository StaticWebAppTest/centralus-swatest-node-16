module.exports = async function (context, req) {
  const date = "2023-01-19T21:08:34.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

