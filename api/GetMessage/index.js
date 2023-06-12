module.exports = async function (context, req) {
  const date = "2023-06-12T02:24:02.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

