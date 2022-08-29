module.exports = async function (context, req) {
  const date = "2022-08-29T17:17:08.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

