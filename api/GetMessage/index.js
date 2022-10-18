module.exports = async function (context, req) {
  const date = "2022-10-18T08:22:56.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

