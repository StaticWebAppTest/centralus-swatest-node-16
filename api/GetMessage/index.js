module.exports = async function (context, req) {
  const date = "2024-03-05T13:09:19.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

