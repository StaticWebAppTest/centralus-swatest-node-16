module.exports = async function (context, req) {
  const date = "2023-03-08T17:09:39.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

