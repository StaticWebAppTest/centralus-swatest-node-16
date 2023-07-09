module.exports = async function (context, req) {
  const date = "2023-07-09T05:09:18.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

