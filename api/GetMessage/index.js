module.exports = async function (context, req) {
  const date = "2022-07-16T14:09:42.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

