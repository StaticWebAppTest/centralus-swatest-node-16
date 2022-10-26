module.exports = async function (context, req) {
  const date = "2022-10-26T05:25:35.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

