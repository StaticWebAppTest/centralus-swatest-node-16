module.exports = async function (context, req) {
  const date = "2024-12-06T15:12:45.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

