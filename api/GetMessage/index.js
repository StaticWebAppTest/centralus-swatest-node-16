module.exports = async function (context, req) {
  const date = "2024-12-03T14:11:18.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

