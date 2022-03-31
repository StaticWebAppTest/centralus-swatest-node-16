module.exports = async function (context, req) {
  const date = "2022-03-31T06:13:10.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

