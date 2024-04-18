module.exports = async function (context, req) {
  const date = "2024-04-18T15:09:42.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

