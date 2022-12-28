module.exports = async function (context, req) {
  const date = "2022-12-28T02:07:16.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

