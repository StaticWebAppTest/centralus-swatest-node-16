module.exports = async function (context, req) {
  const date = "2024-11-20T16:15:31.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

