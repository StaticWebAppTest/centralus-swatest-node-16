module.exports = async function (context, req) {
  const date = "2023-03-25T06:11:29.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

