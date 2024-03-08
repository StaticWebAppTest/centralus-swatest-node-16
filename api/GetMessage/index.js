module.exports = async function (context, req) {
  const date = "2024-03-08T10:11:23.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

