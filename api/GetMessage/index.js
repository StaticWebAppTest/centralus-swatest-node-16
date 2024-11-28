module.exports = async function (context, req) {
  const date = "2024-11-28T17:10:42.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

