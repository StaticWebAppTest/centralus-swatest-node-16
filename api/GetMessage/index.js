module.exports = async function (context, req) {
  const date = "2023-10-25T06:12:05.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

