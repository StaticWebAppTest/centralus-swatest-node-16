module.exports = async function (context, req) {
  const date = "2024-06-01T04:11:43.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

