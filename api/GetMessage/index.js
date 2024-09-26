module.exports = async function (context, req) {
  const date = "2024-09-26T09:12:51.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

