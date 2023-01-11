module.exports = async function (context, req) {
  const date = "2023-01-11T03:10:06.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

