module.exports = async function (context, req) {
  const date = "2023-11-15T21:08:20.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

