module.exports = async function (context, req) {
  const date = "2022-11-13T18:13:11.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

