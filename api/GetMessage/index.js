module.exports = async function (context, req) {
  const date = "2024-04-04T18:12:10.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

