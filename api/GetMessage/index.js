module.exports = async function (context, req) {
  const date = "2024-09-26T18:14:27.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

