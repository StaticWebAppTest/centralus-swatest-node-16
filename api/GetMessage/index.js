module.exports = async function (context, req) {
  const date = "2024-06-28T22:09:18.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

