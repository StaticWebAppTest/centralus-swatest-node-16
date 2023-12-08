module.exports = async function (context, req) {
  const date = "2023-12-08T02:23:47.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

