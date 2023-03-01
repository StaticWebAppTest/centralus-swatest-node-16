module.exports = async function (context, req) {
  const date = "2023-03-01T18:12:35.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

