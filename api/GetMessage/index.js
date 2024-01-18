module.exports = async function (context, req) {
  const date = "2024-01-18T11:08:17.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

