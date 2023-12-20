module.exports = async function (context, req) {
  const date = "2023-12-20T16:10:12.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

