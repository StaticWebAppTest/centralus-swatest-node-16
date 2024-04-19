module.exports = async function (context, req) {
  const date = "2024-04-19T18:11:04.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

