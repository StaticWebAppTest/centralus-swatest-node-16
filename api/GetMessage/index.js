module.exports = async function (context, req) {
  const date = "2023-08-04T10:09:02.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

