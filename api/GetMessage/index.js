module.exports = async function (context, req) {
  const date = "2023-06-03T15:07:44.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

