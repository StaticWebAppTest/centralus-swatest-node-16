module.exports = async function (context, req) {
  const date = "2023-06-23T20:10:50.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

