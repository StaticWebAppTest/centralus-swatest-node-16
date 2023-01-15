module.exports = async function (context, req) {
  const date = "2023-01-15T09:08:54.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

