module.exports = async function (context, req) {
  const date = "2024-05-20T09:13:11.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

