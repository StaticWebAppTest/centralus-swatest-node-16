module.exports = async function (context, req) {
  const date = "2024-05-26T15:10:24.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

