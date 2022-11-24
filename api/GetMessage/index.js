module.exports = async function (context, req) {
  const date = "2022-11-24T06:12:57.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

