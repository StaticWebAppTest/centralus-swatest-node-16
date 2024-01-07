module.exports = async function (context, req) {
  const date = "2024-01-07T19:07:04.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

