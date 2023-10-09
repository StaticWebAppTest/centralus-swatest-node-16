module.exports = async function (context, req) {
  const date = "2023-10-09T00:41:11.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

