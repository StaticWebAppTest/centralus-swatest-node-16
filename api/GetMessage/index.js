module.exports = async function (context, req) {
  const date = "2023-05-25T22:08:08.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

