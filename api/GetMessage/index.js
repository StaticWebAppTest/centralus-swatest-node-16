module.exports = async function (context, req) {
  const date = "2022-06-30T06:13:49.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

