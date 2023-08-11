module.exports = async function (context, req) {
  const date = "2023-08-11T12:15:03.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

