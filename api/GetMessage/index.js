module.exports = async function (context, req) {
  const date = "2023-06-06T07:08:33.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

