module.exports = async function (context, req) {
  const date = "2022-05-20T08:14:17.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

