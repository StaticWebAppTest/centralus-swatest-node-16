module.exports = async function (context, req) {
  const date = "2023-09-27T17:08:03.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

