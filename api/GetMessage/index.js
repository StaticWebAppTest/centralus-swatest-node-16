module.exports = async function (context, req) {
  const date = "2024-12-05T15:13:21.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

