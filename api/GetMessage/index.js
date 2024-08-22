module.exports = async function (context, req) {
  const date = "2024-08-22T07:11:24.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

