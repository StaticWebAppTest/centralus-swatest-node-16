module.exports = async function (context, req) {
  const date = "2022-09-26T01:11:44.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

