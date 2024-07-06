module.exports = async function (context, req) {
  const date = "2024-07-06T16:11:01.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

