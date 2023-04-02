module.exports = async function (context, req) {
  const date = "2023-04-02T20:08:33.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

