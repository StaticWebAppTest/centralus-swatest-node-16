module.exports = async function (context, req) {
  const date = "2023-10-27T02:15:18.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

