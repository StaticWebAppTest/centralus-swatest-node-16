module.exports = async function (context, req) {
  const date = "2023-12-05T16:12:42.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

