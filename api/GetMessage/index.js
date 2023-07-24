module.exports = async function (context, req) {
  const date = "2023-07-24T06:12:40.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

