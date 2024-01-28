module.exports = async function (context, req) {
  const date = "2024-01-28T08:10:44.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

