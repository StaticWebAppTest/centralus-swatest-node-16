module.exports = async function (context, req) {
  const date = "2022-07-13T23:10:50.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

