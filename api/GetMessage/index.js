module.exports = async function (context, req) {
  const date = "2024-06-20T05:09:45.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

