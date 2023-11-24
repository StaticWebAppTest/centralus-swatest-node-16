module.exports = async function (context, req) {
  const date = "2023-11-24T16:11:43.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

