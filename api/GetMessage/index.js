module.exports = async function (context, req) {
  const date = "2023-06-24T10:10:08.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

