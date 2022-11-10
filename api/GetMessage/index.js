module.exports = async function (context, req) {
  const date = "2022-11-10T23:12:22.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

