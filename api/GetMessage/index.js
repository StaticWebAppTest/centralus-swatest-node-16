module.exports = async function (context, req) {
  const date = "2024-02-14T01:42:04.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

