module.exports = async function (context, req) {
  const date = "2024-02-14T18:11:17.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

