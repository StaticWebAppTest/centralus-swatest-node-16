module.exports = async function (context, req) {
  const date = "2022-11-01T14:18:44.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

