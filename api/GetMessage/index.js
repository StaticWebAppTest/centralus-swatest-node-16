module.exports = async function (context, req) {
  const date = "2023-03-22T15:09:51.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

