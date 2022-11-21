module.exports = async function (context, req) {
  const date = "2022-11-21T05:10:31.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

