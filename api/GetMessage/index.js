module.exports = async function (context, req) {
  const date = "2024-08-01T13:14:24.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

