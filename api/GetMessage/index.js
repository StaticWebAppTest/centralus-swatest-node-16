module.exports = async function (context, req) {
  const date = "2022-11-18T07:10:26.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

