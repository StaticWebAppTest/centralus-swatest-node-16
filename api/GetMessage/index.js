module.exports = async function (context, req) {
  const date = "2024-09-22T05:11:42.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

