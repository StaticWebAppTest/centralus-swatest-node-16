module.exports = async function (context, req) {
  const date = "2023-02-24T18:12:44.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

