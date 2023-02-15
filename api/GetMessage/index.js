module.exports = async function (context, req) {
  const date = "2023-02-15T19:08:20.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

