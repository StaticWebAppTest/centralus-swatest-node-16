module.exports = async function (context, req) {
  const date = "2023-08-26T18:09:46.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

