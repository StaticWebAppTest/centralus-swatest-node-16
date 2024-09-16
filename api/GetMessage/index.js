module.exports = async function (context, req) {
  const date = "2024-09-16T09:14:33.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

