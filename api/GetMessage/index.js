module.exports = async function (context, req) {
  const date = "2025-05-21T07:13:01.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

