module.exports = async function (context, req) {
  const date = "2023-05-22T02:07:09.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

