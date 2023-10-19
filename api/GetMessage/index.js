module.exports = async function (context, req) {
  const date = "2023-10-19T12:17:25.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

