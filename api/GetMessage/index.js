module.exports = async function (context, req) {
  const date = "2024-08-15T10:12:50.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

