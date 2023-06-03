module.exports = async function (context, req) {
  const date = "2023-06-03T17:06:59.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

