module.exports = async function (context, req) {
  const date = "2023-02-10T21:08:52.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

