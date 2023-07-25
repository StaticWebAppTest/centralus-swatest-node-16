module.exports = async function (context, req) {
  const date = "2023-07-25T06:11:54.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

