module.exports = async function (context, req) {
  const date = "2022-04-30T09:10:12.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

