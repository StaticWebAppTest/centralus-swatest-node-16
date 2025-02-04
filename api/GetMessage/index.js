module.exports = async function (context, req) {
  const date = "2025-02-04T14:11:02.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

