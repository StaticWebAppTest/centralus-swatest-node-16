module.exports = async function (context, req) {
  const date = "2022-06-30T13:32:01.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

