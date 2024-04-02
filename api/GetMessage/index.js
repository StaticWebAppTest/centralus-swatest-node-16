module.exports = async function (context, req) {
  const date = "2024-04-02T20:09:06.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

