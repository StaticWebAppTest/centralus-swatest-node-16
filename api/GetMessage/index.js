module.exports = async function (context, req) {
  const date = "2024-01-12T04:12:05.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

