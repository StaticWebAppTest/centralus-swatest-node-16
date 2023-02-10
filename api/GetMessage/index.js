module.exports = async function (context, req) {
  const date = "2023-02-10T02:22:10.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

