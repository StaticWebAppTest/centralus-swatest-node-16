module.exports = async function (context, req) {
  const date = "2023-09-18T16:11:32.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

