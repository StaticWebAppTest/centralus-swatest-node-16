module.exports = async function (context, req) {
  const date = "2022-12-15T02:19:05.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

