module.exports = async function (context, req) {
  const date = "2024-11-24T08:15:20.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

