module.exports = async function (context, req) {
  const date = "2023-05-22T18:10:47.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

