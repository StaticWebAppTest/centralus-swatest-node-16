module.exports = async function (context, req) {
  const date = "2023-03-11T20:09:14.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

