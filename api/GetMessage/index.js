module.exports = async function (context, req) {
  const date = "2023-10-30T06:12:11.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

