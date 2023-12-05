module.exports = async function (context, req) {
  const date = "2023-12-05T23:09:23.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

