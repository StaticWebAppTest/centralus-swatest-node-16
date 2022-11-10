module.exports = async function (context, req) {
  const date = "2022-11-10T04:33:35.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

