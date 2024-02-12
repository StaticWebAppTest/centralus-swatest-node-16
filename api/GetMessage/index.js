module.exports = async function (context, req) {
  const date = "2024-02-12T17:08:17.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

