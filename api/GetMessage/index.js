module.exports = async function (context, req) {
  const date = "2022-05-21T10:11:37.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

