module.exports = async function (context, req) {
  const date = "2024-09-08T23:13:06.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

