module.exports = async function (context, req) {
  const date = "2022-04-11T08:13:22.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

