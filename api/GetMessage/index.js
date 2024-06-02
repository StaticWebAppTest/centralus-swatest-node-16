module.exports = async function (context, req) {
  const date = "2024-06-02T04:11:31.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

