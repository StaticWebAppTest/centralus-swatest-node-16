module.exports = async function (context, req) {
  const date = "2023-01-15T20:09:12.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

