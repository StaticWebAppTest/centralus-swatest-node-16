module.exports = async function (context, req) {
  const date = "2024-06-26T20:12:48.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

