module.exports = async function (context, req) {
  const date = "2024-05-24T23:09:03.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

