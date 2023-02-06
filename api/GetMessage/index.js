module.exports = async function (context, req) {
  const date = "2023-02-06T19:08:00.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

