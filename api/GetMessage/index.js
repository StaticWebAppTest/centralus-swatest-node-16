module.exports = async function (context, req) {
  const date = "2023-06-10T13:08:59.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

