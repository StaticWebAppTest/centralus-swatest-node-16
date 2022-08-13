module.exports = async function (context, req) {
  const date = "2022-08-13T06:13:10.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

