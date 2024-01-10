module.exports = async function (context, req) {
  const date = "2024-01-10T05:09:22.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

