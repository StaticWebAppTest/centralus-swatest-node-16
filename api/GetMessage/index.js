module.exports = async function (context, req) {
  const date = "2023-03-23T23:09:19.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

