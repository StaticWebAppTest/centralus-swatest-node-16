module.exports = async function (context, req) {
  const date = "2022-06-08T08:15:41.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

