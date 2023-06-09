module.exports = async function (context, req) {
  const date = "2023-06-09T03:16:28.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

