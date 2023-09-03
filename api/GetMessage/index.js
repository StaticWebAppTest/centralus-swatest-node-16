module.exports = async function (context, req) {
  const date = "2023-09-03T04:09:39.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

