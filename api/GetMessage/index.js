module.exports = async function (context, req) {
  const date = "2024-07-22T11:09:03.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

