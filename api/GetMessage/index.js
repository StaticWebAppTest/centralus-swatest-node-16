module.exports = async function (context, req) {
  const date = "2023-06-15T23:09:16.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

