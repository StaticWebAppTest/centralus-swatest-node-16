module.exports = async function (context, req) {
  const date = "2023-05-03T22:08:08.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

