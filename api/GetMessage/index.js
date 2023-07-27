module.exports = async function (context, req) {
  const date = "2023-07-27T15:08:42.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

