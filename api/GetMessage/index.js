module.exports = async function (context, req) {
  const date = "2024-11-16T08:14:46.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

