module.exports = async function (context, req) {
  const date = "2023-08-29T11:07:01.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

