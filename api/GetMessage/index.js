module.exports = async function (context, req) {
  const date = "2022-11-03T01:04:30.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

