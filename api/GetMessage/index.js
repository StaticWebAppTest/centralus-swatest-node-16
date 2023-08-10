module.exports = async function (context, req) {
  const date = "2023-08-10T04:10:54.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

