module.exports = async function (context, req) {
  const date = "2024-11-03T05:11:15.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

