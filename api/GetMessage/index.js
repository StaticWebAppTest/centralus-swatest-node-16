module.exports = async function (context, req) {
  const date = "2023-10-23T12:17:11.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

