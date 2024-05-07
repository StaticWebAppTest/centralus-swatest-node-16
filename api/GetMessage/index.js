module.exports = async function (context, req) {
  const date = "2024-05-07T18:12:35.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

