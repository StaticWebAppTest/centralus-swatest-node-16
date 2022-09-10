module.exports = async function (context, req) {
  const date = "2022-09-10T05:40:50.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

