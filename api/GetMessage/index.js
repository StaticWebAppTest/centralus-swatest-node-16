module.exports = async function (context, req) {
  const date = "2024-11-15T14:11:49.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

