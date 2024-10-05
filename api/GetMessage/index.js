module.exports = async function (context, req) {
  const date = "2024-10-05T11:09:51.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

