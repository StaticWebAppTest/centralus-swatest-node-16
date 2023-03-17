module.exports = async function (context, req) {
  const date = "2023-03-17T18:11:43.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

