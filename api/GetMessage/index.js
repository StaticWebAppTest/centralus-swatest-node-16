module.exports = async function (context, req) {
  const date = "2025-05-23T13:24:45.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

