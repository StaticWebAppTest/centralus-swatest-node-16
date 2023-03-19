module.exports = async function (context, req) {
  const date = "2023-03-19T07:08:33.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

