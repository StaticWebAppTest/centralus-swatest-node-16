module.exports = async function (context, req) {
  const date = "2024-05-15T08:12:33.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

