module.exports = async function (context, req) {
  const date = "2023-03-31T03:09:57.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

