module.exports = async function (context, req) {
  const date = "2024-05-30T03:10:52.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

