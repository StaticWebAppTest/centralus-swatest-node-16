module.exports = async function (context, req) {
  const date = "2024-02-19T02:17:00.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

