module.exports = async function (context, req) {
  const date = "2023-05-11T14:08:21.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

