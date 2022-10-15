module.exports = async function (context, req) {
  const date = "2022-10-15T21:11:27.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

