module.exports = async function (context, req) {
  const date = "2024-09-22T23:11:56.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

