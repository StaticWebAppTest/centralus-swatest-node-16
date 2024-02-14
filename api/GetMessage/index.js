module.exports = async function (context, req) {
  const date = "2024-02-14T03:10:51.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

