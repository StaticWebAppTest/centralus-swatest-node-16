module.exports = async function (context, req) {
  const date = "2023-05-15T10:09:38.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

