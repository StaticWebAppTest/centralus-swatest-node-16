module.exports = async function (context, req) {
  const date = "2023-12-21T05:09:15.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

