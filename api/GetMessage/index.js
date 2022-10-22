module.exports = async function (context, req) {
  const date = "2022-10-22T20:13:50.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

