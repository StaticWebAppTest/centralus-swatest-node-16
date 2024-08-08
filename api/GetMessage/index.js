module.exports = async function (context, req) {
  const date = "2024-08-08T02:01:42.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

