module.exports = async function (context, req) {
  const date = "2022-09-30T15:16:08.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

