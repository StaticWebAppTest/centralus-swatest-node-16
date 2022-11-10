module.exports = async function (context, req) {
  const date = "2022-11-10T05:20:23.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

