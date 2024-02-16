module.exports = async function (context, req) {
  const date = "2024-02-16T12:15:42.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

