module.exports = async function (context, req) {
  const date = "2022-03-21T03:18:46.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

