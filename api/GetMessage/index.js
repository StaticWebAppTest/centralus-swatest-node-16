module.exports = async function (context, req) {
  const date = "2023-12-24T03:09:22.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

