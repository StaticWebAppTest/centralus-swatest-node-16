module.exports = async function (context, req) {
  const date = "2023-05-21T21:07:27.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

