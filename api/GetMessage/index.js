module.exports = async function (context, req) {
  const date = "2023-05-13T18:10:24.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

