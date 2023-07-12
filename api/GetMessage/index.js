module.exports = async function (context, req) {
  const date = "2023-07-12T04:12:03.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

