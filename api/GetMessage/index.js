module.exports = async function (context, req) {
  const date = "2023-11-08T02:18:26.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

