module.exports = async function (context, req) {
  const date = "2023-09-24T06:10:39.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

