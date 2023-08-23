module.exports = async function (context, req) {
  const date = "2023-08-23T10:09:17.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

