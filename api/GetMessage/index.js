module.exports = async function (context, req) {
  const date = "2024-03-07T08:09:20.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

