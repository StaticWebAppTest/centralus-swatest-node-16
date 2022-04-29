module.exports = async function (context, req) {
  const date = "2022-04-29T00:53:02.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

