module.exports = async function (context, req) {
  const date = "2023-02-17T07:09:14.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

