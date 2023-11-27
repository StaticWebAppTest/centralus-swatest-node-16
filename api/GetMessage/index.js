module.exports = async function (context, req) {
  const date = "2023-11-27T19:07:23.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

