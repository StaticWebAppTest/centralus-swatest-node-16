module.exports = async function (context, req) {
  const date = "2023-10-22T07:07:33.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

