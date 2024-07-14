module.exports = async function (context, req) {
  const date = "2024-07-14T03:13:29.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

