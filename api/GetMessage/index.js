module.exports = async function (context, req) {
  const date = "2022-05-24T13:33:37.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

