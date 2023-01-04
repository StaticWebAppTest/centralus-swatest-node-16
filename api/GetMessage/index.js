module.exports = async function (context, req) {
  const date = "2023-01-04T07:08:57.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

