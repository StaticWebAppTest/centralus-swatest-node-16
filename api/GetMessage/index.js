module.exports = async function (context, req) {
  const date = "2024-05-18T06:12:18.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

