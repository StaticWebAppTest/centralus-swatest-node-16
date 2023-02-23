module.exports = async function (context, req) {
  const date = "2023-02-23T17:09:17.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

