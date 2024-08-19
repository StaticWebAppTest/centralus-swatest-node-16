module.exports = async function (context, req) {
  const date = "2024-08-19T10:13:02.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

