module.exports = async function (context, req) {
  const date = "2023-03-20T13:19:21.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

