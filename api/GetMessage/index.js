module.exports = async function (context, req) {
  const date = "2022-10-11T16:20:33.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

