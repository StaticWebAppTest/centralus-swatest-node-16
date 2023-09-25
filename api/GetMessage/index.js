module.exports = async function (context, req) {
  const date = "2023-09-25T11:07:34.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

