module.exports = async function (context, req) {
  const date = "2022-03-21T21:08:09.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

