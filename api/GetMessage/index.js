module.exports = async function (context, req) {
  const date = "2023-02-20T09:11:02.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

