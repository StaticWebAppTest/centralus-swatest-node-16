module.exports = async function (context, req) {
  const date = "2023-06-14T18:10:50.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

