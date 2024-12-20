module.exports = async function (context, req) {
  const date = "2024-12-20T05:11:48.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

