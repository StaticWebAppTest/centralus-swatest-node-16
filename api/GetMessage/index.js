module.exports = async function (context, req) {
  const date = "2025-03-12T17:11:30.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

