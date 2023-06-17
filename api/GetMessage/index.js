module.exports = async function (context, req) {
  const date = "2023-06-17T15:07:42.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

