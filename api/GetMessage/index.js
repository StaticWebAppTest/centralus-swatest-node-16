module.exports = async function (context, req) {
  const date = "2022-05-07T12:18:40.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

