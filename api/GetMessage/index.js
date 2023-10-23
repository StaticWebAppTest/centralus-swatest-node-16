module.exports = async function (context, req) {
  const date = "2023-10-23T02:17:47.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

