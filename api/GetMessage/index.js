module.exports = async function (context, req) {
  const date = "2023-11-18T06:11:23.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

