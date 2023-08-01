module.exports = async function (context, req) {
  const date = "2023-08-01T08:11:32.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

