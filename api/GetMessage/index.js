module.exports = async function (context, req) {
  const date = "2023-02-28T06:13:29.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

