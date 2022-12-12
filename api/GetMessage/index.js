module.exports = async function (context, req) {
  const date = "2022-12-12T16:13:26.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

