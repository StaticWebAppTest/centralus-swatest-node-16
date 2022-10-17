module.exports = async function (context, req) {
  const date = "2022-10-17T06:10:59.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

