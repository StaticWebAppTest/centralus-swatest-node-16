module.exports = async function (context, req) {
  const date = "2023-02-27T18:12:50.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

