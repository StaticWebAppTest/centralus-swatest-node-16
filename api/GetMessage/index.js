module.exports = async function (context, req) {
  const date = "2024-05-20T05:11:25.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

