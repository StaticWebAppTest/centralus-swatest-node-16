module.exports = async function (context, req) {
  const date = "2023-08-01T00:53:35.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

