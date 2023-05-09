module.exports = async function (context, req) {
  const date = "2023-05-09T11:07:26.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

