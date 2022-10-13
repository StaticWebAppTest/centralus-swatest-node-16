module.exports = async function (context, req) {
  const date = "2022-10-13T05:56:05.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

