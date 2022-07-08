module.exports = async function (context, req) {
  const date = "2022-07-08T21:09:20.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

