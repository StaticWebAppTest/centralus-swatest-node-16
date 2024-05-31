module.exports = async function (context, req) {
  const date = "2024-05-31T07:09:01.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

