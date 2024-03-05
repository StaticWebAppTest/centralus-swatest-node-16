module.exports = async function (context, req) {
  const date = "2024-03-05T18:11:17.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

