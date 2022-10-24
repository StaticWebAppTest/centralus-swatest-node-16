module.exports = async function (context, req) {
  const date = "2022-10-24T01:25:20.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

