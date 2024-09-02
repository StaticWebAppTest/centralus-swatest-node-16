module.exports = async function (context, req) {
  const date = "2024-09-02T19:09:11.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

