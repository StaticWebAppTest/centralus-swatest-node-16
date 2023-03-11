module.exports = async function (context, req) {
  const date = "2023-03-11T13:12:45.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

