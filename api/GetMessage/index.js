module.exports = async function (context, req) {
  const date = "2022-09-30T17:30:52.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

