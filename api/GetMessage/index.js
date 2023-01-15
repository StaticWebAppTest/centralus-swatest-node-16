module.exports = async function (context, req) {
  const date = "2023-01-15T12:15:57.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

