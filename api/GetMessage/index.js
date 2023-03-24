module.exports = async function (context, req) {
  const date = "2023-03-24T06:12:03.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

