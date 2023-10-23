module.exports = async function (context, req) {
  const date = "2023-10-23T10:10:17.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

