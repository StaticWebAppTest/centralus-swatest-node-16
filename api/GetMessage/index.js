module.exports = async function (context, req) {
  const date = "2024-08-01T09:10:05.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

