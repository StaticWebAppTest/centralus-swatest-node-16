module.exports = async function (context, req) {
  const date = "2022-12-17T21:07:36.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

