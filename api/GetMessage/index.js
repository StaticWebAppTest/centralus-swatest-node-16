module.exports = async function (context, req) {
  const date = "2023-10-28T22:07:09.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

