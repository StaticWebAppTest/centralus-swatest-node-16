module.exports = async function (context, req) {
  const date = "2023-12-10T02:25:26.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

