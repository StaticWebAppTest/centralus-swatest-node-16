module.exports = async function (context, req) {
  const date = "2023-06-26T20:10:51.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

