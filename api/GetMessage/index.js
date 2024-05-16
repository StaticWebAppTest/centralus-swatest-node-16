module.exports = async function (context, req) {
  const date = "2024-05-16T18:12:15.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

