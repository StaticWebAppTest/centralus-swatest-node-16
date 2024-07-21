module.exports = async function (context, req) {
  const date = "2024-07-21T13:10:51.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

