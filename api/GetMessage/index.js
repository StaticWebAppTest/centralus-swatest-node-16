module.exports = async function (context, req) {
  const date = "2023-01-13T08:12:58.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

