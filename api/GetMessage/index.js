module.exports = async function (context, req) {
  const date = "2023-06-26T14:10:04.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

