module.exports = async function (context, req) {
  const date = "2023-02-22T10:11:01.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

