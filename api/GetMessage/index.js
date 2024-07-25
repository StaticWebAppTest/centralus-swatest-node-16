module.exports = async function (context, req) {
  const date = "2024-07-25T04:13:21.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

