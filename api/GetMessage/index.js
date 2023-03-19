module.exports = async function (context, req) {
  const date = "2023-03-19T04:11:16.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

