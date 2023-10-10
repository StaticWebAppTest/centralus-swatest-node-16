module.exports = async function (context, req) {
  const date = "2023-10-10T02:16:09.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

