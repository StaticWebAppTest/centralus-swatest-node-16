module.exports = async function (context, req) {
  const date = "2024-04-10T17:07:58.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

