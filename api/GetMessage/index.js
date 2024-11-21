module.exports = async function (context, req) {
  const date = "2024-11-21T06:17:24.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

