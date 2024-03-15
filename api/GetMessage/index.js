module.exports = async function (context, req) {
  const date = "2024-03-15T05:10:00.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

