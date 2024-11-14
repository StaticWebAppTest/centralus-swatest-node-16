module.exports = async function (context, req) {
  const date = "2024-11-14T15:12:29.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

