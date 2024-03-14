module.exports = async function (context, req) {
  const date = "2024-03-14T11:07:50.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

