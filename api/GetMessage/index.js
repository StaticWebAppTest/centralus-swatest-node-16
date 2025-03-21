module.exports = async function (context, req) {
  const date = "2025-03-21T15:13:02.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

