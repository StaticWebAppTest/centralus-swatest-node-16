module.exports = async function (context, req) {
  const date = "2024-03-21T05:08:58.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

