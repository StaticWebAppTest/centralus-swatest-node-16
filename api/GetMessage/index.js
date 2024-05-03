module.exports = async function (context, req) {
  const date = "2024-05-03T05:09:49.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

