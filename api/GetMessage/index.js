module.exports = async function (context, req) {
  const date = "2023-07-23T03:09:09.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

