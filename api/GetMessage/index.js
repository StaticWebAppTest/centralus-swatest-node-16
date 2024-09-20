module.exports = async function (context, req) {
  const date = "2024-09-20T10:12:05.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

