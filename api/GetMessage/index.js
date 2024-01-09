module.exports = async function (context, req) {
  const date = "2024-01-09T20:10:23.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

