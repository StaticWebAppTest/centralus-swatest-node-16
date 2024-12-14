module.exports = async function (context, req) {
  const date = "2024-12-14T03:25:25.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

