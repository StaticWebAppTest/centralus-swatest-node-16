module.exports = async function (context, req) {
  const date = "2022-12-10T06:12:01.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

