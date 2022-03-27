module.exports = async function (context, req) {
  const date = "2022-03-27T03:15:02.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

