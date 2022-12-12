module.exports = async function (context, req) {
  const date = "2022-12-12T22:09:50.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

