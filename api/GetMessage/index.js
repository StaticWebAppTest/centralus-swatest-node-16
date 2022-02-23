module.exports = async function (context, req) {
  const date = "2022-02-23T17:12:28.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

