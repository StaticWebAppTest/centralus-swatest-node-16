module.exports = async function (context, req) {
  const date = "2023-04-28T17:07:53.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

