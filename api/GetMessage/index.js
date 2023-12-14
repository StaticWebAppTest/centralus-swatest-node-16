module.exports = async function (context, req) {
  const date = "2023-12-14T17:08:42.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

