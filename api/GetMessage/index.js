module.exports = async function (context, req) {
  const date = "2023-08-24T12:16:07.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

