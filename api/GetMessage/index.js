module.exports = async function (context, req) {
  const date = "2024-09-20T03:14:23.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

