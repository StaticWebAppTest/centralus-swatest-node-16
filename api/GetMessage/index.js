module.exports = async function (context, req) {
  const date = "2024-09-14T05:11:56.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

