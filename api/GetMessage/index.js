module.exports = async function (context, req) {
  const date = "2024-06-14T12:18:36.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

