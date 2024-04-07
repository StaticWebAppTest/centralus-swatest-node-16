module.exports = async function (context, req) {
  const date = "2024-04-07T09:09:19.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

