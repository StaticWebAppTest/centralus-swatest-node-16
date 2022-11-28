module.exports = async function (context, req) {
  const date = "2022-11-28T06:13:42.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

