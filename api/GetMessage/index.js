module.exports = async function (context, req) {
  const date = "2023-01-13T18:11:35.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

