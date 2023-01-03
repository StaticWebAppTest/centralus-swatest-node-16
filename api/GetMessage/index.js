module.exports = async function (context, req) {
  const date = "2023-01-03T21:08:56.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

