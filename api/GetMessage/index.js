module.exports = async function (context, req) {
  const date = "2024-08-19T15:11:45.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

