module.exports = async function (context, req) {
  const date = "2023-11-21T07:08:37.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

