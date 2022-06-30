module.exports = async function (context, req) {
  const date = "2022-06-30T04:31:17.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

