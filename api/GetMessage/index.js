module.exports = async function (context, req) {
  const date = "2023-08-08T06:11:17.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

