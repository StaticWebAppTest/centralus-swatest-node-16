module.exports = async function (context, req) {
  const date = "2023-12-20T15:07:38.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

