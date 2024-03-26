module.exports = async function (context, req) {
  const date = "2024-03-26T06:12:43.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

