module.exports = async function (context, req) {
  const date = "2023-11-16T12:17:29.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

