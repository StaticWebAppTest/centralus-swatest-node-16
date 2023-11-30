module.exports = async function (context, req) {
  const date = "2023-11-30T04:11:30.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

