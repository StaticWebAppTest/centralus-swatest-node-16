module.exports = async function (context, req) {
  const date = "2024-05-09T03:10:21.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

