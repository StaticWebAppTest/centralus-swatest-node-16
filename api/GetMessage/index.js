module.exports = async function (context, req) {
  const date = "2024-01-14T03:10:15.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

