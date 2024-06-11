module.exports = async function (context, req) {
  const date = "2024-06-11T18:14:13.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

