module.exports = async function (context, req) {
  const date = "2023-10-18T21:07:41.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

