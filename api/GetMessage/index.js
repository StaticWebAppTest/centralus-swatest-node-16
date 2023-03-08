module.exports = async function (context, req) {
  const date = "2023-03-08T10:11:31.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

