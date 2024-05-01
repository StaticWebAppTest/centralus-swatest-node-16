module.exports = async function (context, req) {
  const date = "2024-05-01T04:11:32.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

