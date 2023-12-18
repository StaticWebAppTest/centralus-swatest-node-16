module.exports = async function (context, req) {
  const date = "2023-12-18T08:13:04.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

