module.exports = async function (context, req) {
  const date = "2023-09-04T11:07:14.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

