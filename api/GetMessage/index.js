module.exports = async function (context, req) {
  const date = "2023-04-21T11:07:29.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

