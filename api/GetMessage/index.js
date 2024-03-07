module.exports = async function (context, req) {
  const date = "2024-03-07T20:09:04.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

