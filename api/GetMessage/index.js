module.exports = async function (context, req) {
  const date = "2023-05-05T01:55:52.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

