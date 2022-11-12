module.exports = async function (context, req) {
  const date = "2022-11-12T06:14:02.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

