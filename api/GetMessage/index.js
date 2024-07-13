module.exports = async function (context, req) {
  const date = "2024-07-13T09:09:51.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

