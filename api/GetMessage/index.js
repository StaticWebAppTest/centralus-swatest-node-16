module.exports = async function (context, req) {
  const date = "2023-08-05T08:10:04.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

