module.exports = async function (context, req) {
  const date = "2024-04-29T11:09:46.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

