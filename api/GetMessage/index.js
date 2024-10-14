module.exports = async function (context, req) {
  const date = "2024-10-14T08:16:20.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

