module.exports = async function (context, req) {
  const date = "2024-07-16T08:14:28.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

