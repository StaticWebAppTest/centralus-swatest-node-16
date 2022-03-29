module.exports = async function (context, req) {
  const date = "2022-03-29T03:26:00.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

