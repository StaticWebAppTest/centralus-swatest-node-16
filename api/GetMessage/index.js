module.exports = async function (context, req) {
  const date = "2023-04-24T06:12:21.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

