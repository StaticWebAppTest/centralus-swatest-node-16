module.exports = async function (context, req) {
  const date = "2023-04-06T13:11:32.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

