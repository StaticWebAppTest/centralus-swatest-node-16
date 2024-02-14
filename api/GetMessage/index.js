module.exports = async function (context, req) {
  const date = "2024-02-14T12:16:18.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

