module.exports = async function (context, req) {
  const date = "2023-11-28T06:12:29.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

