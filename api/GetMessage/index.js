module.exports = async function (context, req) {
  const date = "2022-08-28T04:49:58.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

