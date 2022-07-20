module.exports = async function (context, req) {
  const date = "2022-07-20T17:18:09.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

