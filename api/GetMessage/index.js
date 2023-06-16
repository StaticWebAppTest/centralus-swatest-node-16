module.exports = async function (context, req) {
  const date = "2023-06-16T17:07:27.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

