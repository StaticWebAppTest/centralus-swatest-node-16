module.exports = async function (context, req) {
  const date = "2023-01-01T15:08:30.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

