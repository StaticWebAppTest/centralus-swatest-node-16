module.exports = async function (context, req) {
  const date = "2022-03-12T02:31:12.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

