module.exports = async function (context, req) {
  const date = "2024-07-04T03:13:06.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

