module.exports = async function (context, req) {
  const date = "2022-09-16T08:15:44.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

