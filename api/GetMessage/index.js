module.exports = async function (context, req) {
  const date = "2022-08-11T12:23:23.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

