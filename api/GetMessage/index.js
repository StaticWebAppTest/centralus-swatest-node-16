module.exports = async function (context, req) {
  const date = "2023-08-02T15:08:07.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

