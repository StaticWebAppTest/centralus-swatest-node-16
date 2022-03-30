module.exports = async function (context, req) {
  const date = "2022-03-30T20:10:57.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

