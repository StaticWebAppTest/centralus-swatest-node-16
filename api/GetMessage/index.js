module.exports = async function (context, req) {
  const date = "2023-09-30T06:11:02.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

