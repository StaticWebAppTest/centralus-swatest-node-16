module.exports = async function (context, req) {
  const date = "2022-07-21T17:15:09.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

