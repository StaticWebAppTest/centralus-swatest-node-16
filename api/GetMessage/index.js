module.exports = async function (context, req) {
  const date = "2023-09-09T04:09:54.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

