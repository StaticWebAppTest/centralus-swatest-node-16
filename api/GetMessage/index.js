module.exports = async function (context, req) {
  const date = "2022-12-11T16:12:22.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

