module.exports = async function (context, req) {
  const date = "2024-12-02T17:11:02.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

