module.exports = async function (context, req) {
  const date = "2022-10-29T03:06:25.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

