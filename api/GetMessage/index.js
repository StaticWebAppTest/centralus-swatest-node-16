module.exports = async function (context, req) {
  const date = "2025-06-24T13:29:14.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

