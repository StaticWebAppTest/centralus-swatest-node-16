module.exports = async function (context, req) {
  const date = "2023-04-06T21:07:40.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

