module.exports = async function (context, req) {
  const date = "2023-12-23T03:09:25.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

