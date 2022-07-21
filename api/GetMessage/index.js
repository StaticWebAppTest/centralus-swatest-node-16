module.exports = async function (context, req) {
  const date = "2022-07-21T06:14:09.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

