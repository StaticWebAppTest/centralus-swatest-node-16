module.exports = async function (context, req) {
  const date = "2022-10-29T21:10:46.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

