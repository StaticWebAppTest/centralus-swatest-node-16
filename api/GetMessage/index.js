module.exports = async function (context, req) {
  const date = "2022-10-18T09:21:43.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

