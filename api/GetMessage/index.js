module.exports = async function (context, req) {
  const date = "2024-08-02T20:11:24.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

