module.exports = async function (context, req) {
  const date = "2022-07-18T21:09:36.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

