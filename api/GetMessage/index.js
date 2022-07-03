module.exports = async function (context, req) {
  const date = "2022-07-03T01:02:13.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

