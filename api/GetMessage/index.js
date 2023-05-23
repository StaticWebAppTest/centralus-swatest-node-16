module.exports = async function (context, req) {
  const date = "2023-05-23T10:09:37.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

