module.exports = async function (context, req) {
  const date = "2023-02-12T02:19:42.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

