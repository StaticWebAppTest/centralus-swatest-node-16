module.exports = async function (context, req) {
  const date = "2022-12-28T06:12:17.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

