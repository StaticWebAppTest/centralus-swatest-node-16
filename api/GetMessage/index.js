module.exports = async function (context, req) {
  const date = "2023-08-15T17:07:29.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

