module.exports = async function (context, req) {
  const date = "2023-06-28T06:13:25.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

