module.exports = async function (context, req) {
  const date = "2022-11-30T06:13:26.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

