module.exports = async function (context, req) {
  const date = "2023-01-15T02:16:05.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

