module.exports = async function (context, req) {
  const date = "2024-11-19T09:13:30.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

