module.exports = async function (context, req) {
  const date = "2025-03-02T07:10:40.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

