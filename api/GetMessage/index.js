module.exports = async function (context, req) {
  const date = "2022-06-19T03:11:01.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

