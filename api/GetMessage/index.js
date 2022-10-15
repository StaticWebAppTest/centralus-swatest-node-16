module.exports = async function (context, req) {
  const date = "2022-10-15T08:17:17.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

