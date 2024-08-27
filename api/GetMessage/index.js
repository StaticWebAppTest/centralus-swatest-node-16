module.exports = async function (context, req) {
  const date = "2024-08-27T14:10:11.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

