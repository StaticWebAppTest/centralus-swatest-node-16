module.exports = async function (context, req) {
  const date = "2022-04-05T02:23:54.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

