module.exports = async function (context, req) {
  const date = "2024-05-10T13:10:49.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

