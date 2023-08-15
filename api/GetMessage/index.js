module.exports = async function (context, req) {
  const date = "2023-08-15T05:08:06.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

