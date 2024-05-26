module.exports = async function (context, req) {
  const date = "2024-05-26T06:12:39.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

