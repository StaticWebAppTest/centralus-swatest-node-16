module.exports = async function (context, req) {
  const date = "2023-02-06T21:09:17.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

