module.exports = async function (context, req) {
  const date = "2024-01-24T17:08:53.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

