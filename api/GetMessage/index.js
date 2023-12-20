module.exports = async function (context, req) {
  const date = "2023-12-20T04:09:22.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

