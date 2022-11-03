module.exports = async function (context, req) {
  const date = "2022-11-03T11:09:31.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

