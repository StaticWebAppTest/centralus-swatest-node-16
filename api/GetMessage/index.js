module.exports = async function (context, req) {
  const date = "2023-06-13T02:11:32.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

