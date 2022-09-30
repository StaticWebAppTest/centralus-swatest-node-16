module.exports = async function (context, req) {
  const date = "2022-09-30T21:11:44.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

