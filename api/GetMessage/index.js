module.exports = async function (context, req) {
  const date = "2022-07-29T09:11:27.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

