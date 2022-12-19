module.exports = async function (context, req) {
  const date = "2022-12-19T08:12:36.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

