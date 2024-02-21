module.exports = async function (context, req) {
  const date = "2024-02-21T07:08:40.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

