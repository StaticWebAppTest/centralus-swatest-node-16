module.exports = async function (context, req) {
  const date = "2024-09-26T13:20:29.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

