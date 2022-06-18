module.exports = async function (context, req) {
  const date = "2022-06-18T03:43:57.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

