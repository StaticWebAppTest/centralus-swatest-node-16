module.exports = async function (context, req) {
  const date = "2024-01-14T18:10:54.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

