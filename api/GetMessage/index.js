module.exports = async function (context, req) {
  const date = "2023-03-04T00:51:51.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

