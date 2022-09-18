module.exports = async function (context, req) {
  const date = "2022-09-18T06:16:32.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

