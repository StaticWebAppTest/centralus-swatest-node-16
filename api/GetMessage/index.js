module.exports = async function (context, req) {
  const date = "2022-12-20T04:11:23.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

