module.exports = async function (context, req) {
  const date = "2022-10-04T20:14:58.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

