module.exports = async function (context, req) {
  const date = "2024-01-20T18:10:51.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

