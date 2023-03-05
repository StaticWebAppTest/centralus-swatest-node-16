module.exports = async function (context, req) {
  const date = "2023-03-05T18:11:31.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

