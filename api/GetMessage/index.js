module.exports = async function (context, req) {
  const date = "2023-08-13T06:10:01.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

