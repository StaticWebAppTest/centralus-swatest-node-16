module.exports = async function (context, req) {
  const date = "2024-07-25T05:11:05.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

