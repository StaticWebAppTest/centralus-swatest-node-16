module.exports = async function (context, req) {
  const date = "2023-06-13T14:07:54.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

