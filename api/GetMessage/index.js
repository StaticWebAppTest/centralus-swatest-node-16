module.exports = async function (context, req) {
  const date = "2024-03-15T07:09:00.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

