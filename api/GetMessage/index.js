module.exports = async function (context, req) {
  const date = "2024-11-26T18:17:20.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

