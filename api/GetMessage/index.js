module.exports = async function (context, req) {
  const date = "2022-06-17T10:16:17.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

