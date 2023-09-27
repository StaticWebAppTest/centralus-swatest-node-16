module.exports = async function (context, req) {
  const date = "2023-09-27T15:09:13.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

