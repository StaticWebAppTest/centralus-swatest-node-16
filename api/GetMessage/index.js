module.exports = async function (context, req) {
  const date = "2023-06-23T03:25:00.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

