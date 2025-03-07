module.exports = async function (context, req) {
  const date = "2025-03-07T11:10:25.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

