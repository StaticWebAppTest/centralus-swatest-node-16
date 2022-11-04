module.exports = async function (context, req) {
  const date = "2022-11-04T05:19:02.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

