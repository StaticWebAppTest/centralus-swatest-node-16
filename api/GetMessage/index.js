module.exports = async function (context, req) {
  const date = "2024-01-12T03:10:13.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

