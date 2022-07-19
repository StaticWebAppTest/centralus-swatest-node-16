module.exports = async function (context, req) {
  const date = "2022-07-19T16:15:32.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

