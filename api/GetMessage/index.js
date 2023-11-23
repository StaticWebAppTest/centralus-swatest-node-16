module.exports = async function (context, req) {
  const date = "2023-11-23T19:07:21.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

