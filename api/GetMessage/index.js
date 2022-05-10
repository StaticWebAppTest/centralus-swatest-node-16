module.exports = async function (context, req) {
  const date = "2022-05-10T20:13:01.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

