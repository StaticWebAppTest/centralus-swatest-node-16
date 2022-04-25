module.exports = async function (context, req) {
  const date = "2022-04-25T07:10:54.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

