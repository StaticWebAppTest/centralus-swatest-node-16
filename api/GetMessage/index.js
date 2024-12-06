module.exports = async function (context, req) {
  const date = "2024-12-06T16:15:32.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

