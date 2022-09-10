module.exports = async function (context, req) {
  const date = "2022-09-10T19:09:09.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

