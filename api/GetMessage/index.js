module.exports = async function (context, req) {
  const date = "2022-10-06T01:10:17.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

