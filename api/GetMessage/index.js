module.exports = async function (context, req) {
  const date = "2022-11-17T23:11:49.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

