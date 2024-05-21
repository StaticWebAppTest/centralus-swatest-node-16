module.exports = async function (context, req) {
  const date = "2024-05-21T05:10:25.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

