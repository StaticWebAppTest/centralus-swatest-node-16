module.exports = async function (context, req) {
  const date = "2023-11-20T04:11:42.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

