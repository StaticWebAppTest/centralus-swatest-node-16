module.exports = async function (context, req) {
  const date = "2023-03-30T06:12:30.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

