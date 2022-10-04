module.exports = async function (context, req) {
  const date = "2022-10-04T22:13:31.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

