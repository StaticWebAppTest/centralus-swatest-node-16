module.exports = async function (context, req) {
  const date = "2024-08-12T10:11:40.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

