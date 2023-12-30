module.exports = async function (context, req) {
  const date = "2023-12-30T06:11:12.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

