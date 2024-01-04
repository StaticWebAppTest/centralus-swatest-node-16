module.exports = async function (context, req) {
  const date = "2024-01-04T10:09:46.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

