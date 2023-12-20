module.exports = async function (context, req) {
  const date = "2023-12-20T02:08:01.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

