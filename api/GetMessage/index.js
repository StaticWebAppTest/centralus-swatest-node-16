module.exports = async function (context, req) {
  const date = "2022-05-04T06:19:22.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

