module.exports = async function (context, req) {
  const date = "2024-03-02T20:08:09.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

