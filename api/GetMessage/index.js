module.exports = async function (context, req) {
  const date = "2024-05-25T04:11:40.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

