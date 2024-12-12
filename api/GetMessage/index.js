module.exports = async function (context, req) {
  const date = "2024-12-12T12:25:15.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

