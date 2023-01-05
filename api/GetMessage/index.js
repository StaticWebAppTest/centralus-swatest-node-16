module.exports = async function (context, req) {
  const date = "2023-01-05T12:18:19.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

