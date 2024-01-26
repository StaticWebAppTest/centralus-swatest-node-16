module.exports = async function (context, req) {
  const date = "2024-01-26T17:08:01.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

