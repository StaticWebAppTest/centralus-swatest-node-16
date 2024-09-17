module.exports = async function (context, req) {
  const date = "2024-09-17T03:13:12.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

