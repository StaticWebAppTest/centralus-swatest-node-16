module.exports = async function (context, req) {
  const date = "2024-05-22T15:10:17.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

