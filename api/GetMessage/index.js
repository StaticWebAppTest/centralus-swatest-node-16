module.exports = async function (context, req) {
  const date = "2022-05-15T23:10:53.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

