module.exports = async function (context, req) {
  const date = "2024-10-27T11:08:39.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

