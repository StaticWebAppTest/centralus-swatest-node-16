module.exports = async function (context, req) {
  const date = "2024-08-19T21:10:23.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

