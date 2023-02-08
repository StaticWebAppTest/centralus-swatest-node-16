module.exports = async function (context, req) {
  const date = "2023-02-08T02:18:21.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

