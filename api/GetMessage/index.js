module.exports = async function (context, req) {
  const date = "2023-06-06T13:12:30.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

