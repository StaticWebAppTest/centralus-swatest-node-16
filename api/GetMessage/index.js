module.exports = async function (context, req) {
  const date = "2023-03-09T23:11:05.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

