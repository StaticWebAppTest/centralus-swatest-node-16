module.exports = async function (context, req) {
  const date = "2022-11-15T04:16:18.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

