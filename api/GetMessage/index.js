module.exports = async function (context, req) {
  const date = "2024-02-09T16:10:51.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

