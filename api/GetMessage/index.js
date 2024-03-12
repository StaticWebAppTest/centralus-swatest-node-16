module.exports = async function (context, req) {
  const date = "2024-03-12T14:08:27.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

