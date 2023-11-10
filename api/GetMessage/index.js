module.exports = async function (context, req) {
  const date = "2023-11-10T02:18:38.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

