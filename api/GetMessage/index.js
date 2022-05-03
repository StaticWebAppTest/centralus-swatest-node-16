module.exports = async function (context, req) {
  const date = "2022-05-03T03:52:22.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

