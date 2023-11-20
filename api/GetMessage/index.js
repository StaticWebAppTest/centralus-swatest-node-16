module.exports = async function (context, req) {
  const date = "2023-11-20T18:11:53.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

