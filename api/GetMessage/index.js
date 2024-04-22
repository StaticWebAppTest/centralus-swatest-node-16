module.exports = async function (context, req) {
  const date = "2024-04-22T10:11:39.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

