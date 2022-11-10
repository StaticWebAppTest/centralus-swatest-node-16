module.exports = async function (context, req) {
  const date = "2022-11-10T21:11:48.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

