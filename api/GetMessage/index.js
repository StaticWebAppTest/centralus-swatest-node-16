module.exports = async function (context, req) {
  const date = "2023-04-13T16:10:17.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

