module.exports = async function (context, req) {
  const date = "2022-07-20T03:11:53.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

