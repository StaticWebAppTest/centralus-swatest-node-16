module.exports = async function (context, req) {
  const date = "2023-02-23T05:09:24.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

