module.exports = async function (context, req) {
  const date = "2023-05-09T08:11:21.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

