module.exports = async function (context, req) {
  const date = "2024-09-20T16:13:54.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

