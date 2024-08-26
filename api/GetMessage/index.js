module.exports = async function (context, req) {
  const date = "2024-08-26T05:10:52.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

