module.exports = async function (context, req) {
  const date = "2023-04-03T13:12:28.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

