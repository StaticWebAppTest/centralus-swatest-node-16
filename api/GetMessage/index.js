module.exports = async function (context, req) {
  const date = "2023-05-29T18:10:34.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

