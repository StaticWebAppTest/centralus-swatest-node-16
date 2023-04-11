module.exports = async function (context, req) {
  const date = "2023-04-11T16:11:53.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

