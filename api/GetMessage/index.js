module.exports = async function (context, req) {
  const date = "2022-12-28T00:48:17.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

