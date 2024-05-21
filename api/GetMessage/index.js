module.exports = async function (context, req) {
  const date = "2024-05-21T04:11:54.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

