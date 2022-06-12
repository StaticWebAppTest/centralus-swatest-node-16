module.exports = async function (context, req) {
  const date = "2022-06-12T00:58:13.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

