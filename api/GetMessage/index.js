module.exports = async function (context, req) {
  const date = "2023-11-10T17:08:20.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

