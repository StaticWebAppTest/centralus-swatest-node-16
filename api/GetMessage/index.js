module.exports = async function (context, req) {
  const date = "2024-09-06T13:16:30.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

