module.exports = async function (context, req) {
  const date = "2022-04-09T07:10:11.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

