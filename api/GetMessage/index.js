module.exports = async function (context, req) {
  const date = "2022-09-21T07:36:12.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

