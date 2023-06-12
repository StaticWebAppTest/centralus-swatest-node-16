module.exports = async function (context, req) {
  const date = "2023-06-12T20:08:56.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

