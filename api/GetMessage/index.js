module.exports = async function (context, req) {
  const date = "2024-07-08T12:19:57.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

