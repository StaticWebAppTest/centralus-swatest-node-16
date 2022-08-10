module.exports = async function (context, req) {
  const date = "2022-08-10T22:10:23.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

