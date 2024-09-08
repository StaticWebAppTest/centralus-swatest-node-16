module.exports = async function (context, req) {
  const date = "2024-09-08T06:14:17.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

