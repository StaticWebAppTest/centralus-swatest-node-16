module.exports = async function (context, req) {
  const date = "2023-11-20T19:07:43.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

