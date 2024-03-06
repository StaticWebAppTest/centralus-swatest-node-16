module.exports = async function (context, req) {
  const date = "2024-03-06T17:08:47.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

