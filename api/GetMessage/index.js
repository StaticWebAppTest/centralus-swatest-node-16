module.exports = async function (context, req) {
  const date = "2024-02-21T12:15:53.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

