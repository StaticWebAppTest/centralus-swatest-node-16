module.exports = async function (context, req) {
  const date = "2022-09-01T04:01:18.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

