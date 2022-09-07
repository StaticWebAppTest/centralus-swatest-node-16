module.exports = async function (context, req) {
  const date = "2022-09-07T08:17:32.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

