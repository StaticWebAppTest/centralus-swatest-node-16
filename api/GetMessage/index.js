module.exports = async function (context, req) {
  const date = "2022-10-08T09:14:51.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

