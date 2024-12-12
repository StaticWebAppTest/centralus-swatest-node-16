module.exports = async function (context, req) {
  const date = "2024-12-12T04:15:21.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

