module.exports = async function (context, req) {
  const date = "2024-07-08T14:10:33.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

