module.exports = async function (context, req) {
  const date = "2022-04-21T05:31:26.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

