module.exports = async function (context, req) {
  const date = "2024-09-14T16:12:37.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

