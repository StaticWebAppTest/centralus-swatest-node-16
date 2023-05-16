module.exports = async function (context, req) {
  const date = "2023-05-16T14:08:09.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

