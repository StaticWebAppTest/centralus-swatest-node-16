module.exports = async function (context, req) {
  const date = "2022-10-27T23:15:09.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

