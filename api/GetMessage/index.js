module.exports = async function (context, req) {
  const date = "2022-08-30T21:10:45.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

