module.exports = async function (context, req) {
  const date = "2022-06-06T23:10:30.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

