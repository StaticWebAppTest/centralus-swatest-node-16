module.exports = async function (context, req) {
  const date = "2022-04-07T06:13:03.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

