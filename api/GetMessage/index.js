module.exports = async function (context, req) {
  const date = "2023-09-12T04:10:35.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

