module.exports = async function (context, req) {
  const date = "2023-11-02T18:11:26.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

