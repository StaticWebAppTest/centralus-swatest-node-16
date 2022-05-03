module.exports = async function (context, req) {
  const date = "2022-05-03T06:13:56.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

