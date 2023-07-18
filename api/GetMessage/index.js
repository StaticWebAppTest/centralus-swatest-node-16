module.exports = async function (context, req) {
  const date = "2023-07-18T13:16:21.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

