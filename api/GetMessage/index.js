module.exports = async function (context, req) {
  const date = "2023-10-09T10:10:10.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

