module.exports = async function (context, req) {
  const date = "2022-11-19T17:09:20.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

