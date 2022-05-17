module.exports = async function (context, req) {
  const date = "2022-05-17T06:14:50.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

