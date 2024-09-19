module.exports = async function (context, req) {
  const date = "2024-09-19T17:10:35.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

