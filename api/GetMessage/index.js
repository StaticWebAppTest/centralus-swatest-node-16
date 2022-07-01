module.exports = async function (context, req) {
  const date = "2022-07-01T23:10:03.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

