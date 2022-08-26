module.exports = async function (context, req) {
  const date = "2022-08-26T13:30:36.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

