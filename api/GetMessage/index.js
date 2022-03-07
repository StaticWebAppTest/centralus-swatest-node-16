module.exports = async function (context, req) {
  const date = "2022-03-07T10:10:52.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

