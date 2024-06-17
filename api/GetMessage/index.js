module.exports = async function (context, req) {
  const date = "2024-06-17T10:12:19.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

