module.exports = async function (context, req) {
  const date = "2022-05-27T10:12:54.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

