module.exports = async function (context, req) {
  const date = "2023-06-07T10:09:33.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

