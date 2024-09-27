module.exports = async function (context, req) {
  const date = "2024-09-27T11:10:27.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

