module.exports = async function (context, req) {
  const date = "2024-05-22T23:11:36.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

