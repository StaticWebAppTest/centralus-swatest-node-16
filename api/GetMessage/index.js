module.exports = async function (context, req) {
  const date = "2022-08-20T18:12:36.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

