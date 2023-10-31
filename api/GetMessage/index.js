module.exports = async function (context, req) {
  const date = "2023-10-31T13:11:02.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

