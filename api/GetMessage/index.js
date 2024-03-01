module.exports = async function (context, req) {
  const date = "2024-03-01T04:12:15.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

