module.exports = async function (context, req) {
  const date = "2022-12-20T18:11:25.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

