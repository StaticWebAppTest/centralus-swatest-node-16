module.exports = async function (context, req) {
  const date = "2023-01-25T19:07:27.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

