module.exports = async function (context, req) {
  const date = "2022-11-10T01:02:20.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

