module.exports = async function (context, req) {
  const date = "2024-12-26T07:11:21.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

