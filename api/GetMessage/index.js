module.exports = async function (context, req) {
  const date = "2024-09-02T05:11:32.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

