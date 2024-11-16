module.exports = async function (context, req) {
  const date = "2024-11-16T02:20:14.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

