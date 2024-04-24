module.exports = async function (context, req) {
  const date = "2024-04-24T05:10:15.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

