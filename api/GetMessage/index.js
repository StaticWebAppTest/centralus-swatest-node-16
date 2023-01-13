module.exports = async function (context, req) {
  const date = "2023-01-13T04:12:04.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

