module.exports = async function (context, req) {
  const date = "2022-06-02T19:09:12.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

