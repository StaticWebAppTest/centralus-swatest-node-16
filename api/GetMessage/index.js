module.exports = async function (context, req) {
  const date = "2022-04-10T06:12:48.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

