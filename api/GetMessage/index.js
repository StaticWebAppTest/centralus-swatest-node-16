module.exports = async function (context, req) {
  const date = "2023-05-18T23:08:47.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

