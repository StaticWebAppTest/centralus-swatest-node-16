module.exports = async function (context, req) {
  const date = "2024-09-09T09:13:27.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

