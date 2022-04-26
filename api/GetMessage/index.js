module.exports = async function (context, req) {
  const date = "2022-04-26T06:13:30.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

