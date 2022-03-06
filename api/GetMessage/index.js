module.exports = async function (context, req) {
  const date = "2022-03-06T03:10:13.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

