module.exports = async function (context, req) {
  const date = "2024-09-14T14:09:26.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

