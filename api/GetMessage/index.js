module.exports = async function (context, req) {
  const date = "2023-10-03T16:11:37.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

