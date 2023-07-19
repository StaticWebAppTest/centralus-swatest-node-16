module.exports = async function (context, req) {
  const date = "2023-07-19T19:07:10.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

