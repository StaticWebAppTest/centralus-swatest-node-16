module.exports = async function (context, req) {
  const date = "2022-09-30T06:06:09.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

