module.exports = async function (context, req) {
  const date = "2023-11-27T08:13:01.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

