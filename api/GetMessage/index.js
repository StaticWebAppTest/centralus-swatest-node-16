module.exports = async function (context, req) {
  const date = "2024-01-23T05:09:23.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

