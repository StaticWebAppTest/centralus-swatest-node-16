module.exports = async function (context, req) {
  const date = "2022-08-10T07:10:12.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

