module.exports = async function (context, req) {
  const date = "2024-08-20T17:10:22.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

