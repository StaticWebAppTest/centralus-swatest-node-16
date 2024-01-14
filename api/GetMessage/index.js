module.exports = async function (context, req) {
  const date = "2024-01-14T17:07:44.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

