module.exports = async function (context, req) {
  const date = "2024-01-14T02:30:18.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

