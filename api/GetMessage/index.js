module.exports = async function (context, req) {
  const date = "2023-07-30T06:10:31.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

