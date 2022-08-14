module.exports = async function (context, req) {
  const date = "2022-08-14T21:09:44.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

