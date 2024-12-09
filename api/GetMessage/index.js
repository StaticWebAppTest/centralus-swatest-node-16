module.exports = async function (context, req) {
  const date = "2024-12-09T11:11:06.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

