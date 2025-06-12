module.exports = async function (context, req) {
  const date = "2025-06-12T12:27:09.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

