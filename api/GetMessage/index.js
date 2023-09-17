module.exports = async function (context, req) {
  const date = "2023-09-17T17:06:47.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

