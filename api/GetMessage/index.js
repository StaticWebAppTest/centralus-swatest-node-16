module.exports = async function (context, req) {
  const date = "2023-08-23T17:06:39.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

