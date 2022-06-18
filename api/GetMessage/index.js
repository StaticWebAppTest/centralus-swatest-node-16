module.exports = async function (context, req) {
  const date = "2022-06-18T17:09:44.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

