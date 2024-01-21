module.exports = async function (context, req) {
  const date = "2024-01-21T14:08:00.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

