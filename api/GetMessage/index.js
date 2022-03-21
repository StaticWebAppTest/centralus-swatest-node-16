module.exports = async function (context, req) {
  const date = "2022-03-21T06:13:23.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

