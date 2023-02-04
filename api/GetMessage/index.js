module.exports = async function (context, req) {
  const date = "2023-02-04T03:10:24.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

