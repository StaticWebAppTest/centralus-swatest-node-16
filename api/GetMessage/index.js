module.exports = async function (context, req) {
  const date = "2022-05-04T11:11:00.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

