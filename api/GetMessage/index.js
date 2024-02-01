module.exports = async function (context, req) {
  const date = "2024-02-01T20:09:09.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

