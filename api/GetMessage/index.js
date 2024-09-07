module.exports = async function (context, req) {
  const date = "2024-09-07T11:08:35.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

