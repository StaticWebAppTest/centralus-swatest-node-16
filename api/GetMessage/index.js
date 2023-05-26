module.exports = async function (context, req) {
  const date = "2023-05-26T03:09:12.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

