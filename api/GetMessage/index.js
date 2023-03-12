module.exports = async function (context, req) {
  const date = "2023-03-12T03:11:33.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

