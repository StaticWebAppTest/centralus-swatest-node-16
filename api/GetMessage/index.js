module.exports = async function (context, req) {
  const date = "2022-09-03T05:33:33.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

