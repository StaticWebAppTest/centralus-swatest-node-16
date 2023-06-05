module.exports = async function (context, req) {
  const date = "2023-06-05T09:09:32.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

