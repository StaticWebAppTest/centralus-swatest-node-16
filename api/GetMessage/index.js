module.exports = async function (context, req) {
  const date = "2024-11-23T02:18:43.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

