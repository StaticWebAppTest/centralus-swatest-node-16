module.exports = async function (context, req) {
  const date = "2024-11-19T02:23:38.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

