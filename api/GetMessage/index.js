module.exports = async function (context, req) {
  const date = "2022-09-30T04:27:27.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

