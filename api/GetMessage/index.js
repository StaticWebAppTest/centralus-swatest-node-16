module.exports = async function (context, req) {
  const date = "2024-10-04T03:17:25.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

