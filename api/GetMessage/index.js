module.exports = async function (context, req) {
  const date = "2022-08-05T11:09:49.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

