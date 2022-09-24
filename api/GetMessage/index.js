module.exports = async function (context, req) {
  const date = "2022-09-24T21:10:48.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

