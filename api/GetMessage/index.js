module.exports = async function (context, req) {
  const date = "2023-04-09T14:07:12.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

