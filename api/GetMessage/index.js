module.exports = async function (context, req) {
  const date = "2024-08-05T08:14:20.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

