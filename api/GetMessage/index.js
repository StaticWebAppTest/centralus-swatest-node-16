module.exports = async function (context, req) {
  const date = "2022-10-30T23:12:31.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

