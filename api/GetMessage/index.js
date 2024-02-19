module.exports = async function (context, req) {
  const date = "2024-02-19T17:08:44.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

