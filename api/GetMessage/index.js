module.exports = async function (context, req) {
  const date = "2024-02-07T14:08:00.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

