module.exports = async function (context, req) {
  const date = "2022-05-10T17:22:09.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

