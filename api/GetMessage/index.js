module.exports = async function (context, req) {
  const date = "2023-11-07T00:42:09.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

