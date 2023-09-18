module.exports = async function (context, req) {
  const date = "2023-09-18T18:11:27.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

