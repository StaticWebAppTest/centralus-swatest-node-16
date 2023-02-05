module.exports = async function (context, req) {
  const date = "2023-02-05T04:11:09.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

