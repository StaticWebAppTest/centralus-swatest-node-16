module.exports = async function (context, req) {
  const date = "2023-03-30T02:06:08.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

