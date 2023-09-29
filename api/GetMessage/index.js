module.exports = async function (context, req) {
  const date = "2023-09-29T18:11:31.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

