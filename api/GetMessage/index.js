module.exports = async function (context, req) {
  const date = "2022-06-13T22:10:34.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

