module.exports = async function (context, req) {
  const date = "2025-03-13T23:11:49.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

