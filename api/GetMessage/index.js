module.exports = async function (context, req) {
  const date = "2024-09-02T07:11:00.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

