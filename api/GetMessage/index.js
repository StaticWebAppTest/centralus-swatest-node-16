module.exports = async function (context, req) {
  const date = "2024-05-12T04:12:00.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

